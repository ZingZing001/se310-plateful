package com.plateful.backend.restaurant;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
    List<Restaurant> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrCuisineContainingIgnoreCase(
        String name, String description, String cuisine);
    
    @Query(value = "{}", fields = "{ 'cuisine' : 1, '_id' : 0 }")
    List<Restaurant> findAllCuisines();
}
