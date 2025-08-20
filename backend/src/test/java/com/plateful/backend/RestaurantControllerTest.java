package com.plateful.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.plateful.backend.restaurant.Restaurant;
import com.plateful.backend.restaurant.RestaurantController;
import com.plateful.backend.restaurant.RestaurantRepository;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// Only load the web layer for this controller
@WebMvcTest(RestaurantController.class)
class RestaurantControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RestaurantRepository repo;

    @Test
    void list_returnsRestaurants() throws Exception {
        Restaurant r = new Restaurant();
        r.setId("abc123");
        r.setName("Restaurant Name");
        r.setDescription("Description example for testing");
        r.setCuisine("Italian");

        when(repo.findAll()).thenReturn(List.of(r));

        mockMvc.perform(get("/api/restaurants"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith("application/json"))
                .andExpect(jsonPath("$[0].name").value("Restaurant Name"))
                .andExpect(jsonPath("$[0].cuisine").value("Italian"));
    }

    @Test
    void get_returnsSingleRestaurant() throws Exception {
        Restaurant r = new Restaurant();
        r.setId("id234");
        r.setName("One Restaurant");
        when(repo.findById("id234")).thenReturn(java.util.Optional.of(r));

        mockMvc.perform(get("/api/restaurants/id234"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("One Restaurant"));
    }

    @Test
    void getCuisines_returnsDistinctCuisines() throws Exception {
        Restaurant r1 = new Restaurant();
        r1.setCuisine("Italian");
        Restaurant r2 = new Restaurant();
        r2.setCuisine("Chinese");
        Restaurant r3 = new Restaurant();
        r3.setCuisine("Italian"); // Duplicate to test distinct functionality

        when(repo.findAllCuisines()).thenReturn(List.of(r1, r2, r3));

        mockMvc.perform(get("/api/restaurants/cuisines"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith("application/json"))
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[0]").value("Chinese")) // Should be sorted
                .andExpect(jsonPath("$[1]").value("Italian"))
                .andExpect(jsonPath("$.length()").value(2)); // Should be distinct
    }
}
