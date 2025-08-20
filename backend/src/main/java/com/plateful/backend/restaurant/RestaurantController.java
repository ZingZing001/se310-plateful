package com.plateful.backend.restaurant;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/restaurants")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:5175"})
public class RestaurantController {

  private final RestaurantRepository repo;

  public RestaurantController(RestaurantRepository repo) { this.repo = repo; }

  @GetMapping
  public List<Restaurant> list() {
    return repo.findAll();
  }

  @GetMapping("/{id}")
  public Restaurant get(@PathVariable String id) {
    return repo.findById(id).orElseThrow(() -> new RuntimeException("Not found: " + id));
  }

  @GetMapping("/search")
  public List<Restaurant> search(@RequestParam String query) {
    if (query == null || query.trim().isEmpty()) {
      return repo.findAll();
    }
    return repo.findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrCuisineContainingIgnoreCase(
        query, query, query);
  }

  @GetMapping("/cuisines")
  public List<String> getCuisines() {
    return repo.findAllCuisines()
        .stream()
        .map(Restaurant::getCuisine)
        .filter(cuisine -> cuisine != null && !cuisine.trim().isEmpty())
        .distinct()
        .sorted()
        .collect(Collectors.toList());
  }
}
