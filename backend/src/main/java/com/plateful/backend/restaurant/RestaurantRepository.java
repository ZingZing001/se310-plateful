package com.plateful.backend.restaurant;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
    List<Restaurant> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrCuisineContainingIgnoreCase(
        String name, String description, String cuisine);
}
