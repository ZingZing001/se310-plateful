package com.plateful.backend.restaurant;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
@CrossOrigin(origins = {"http://localhost:5173"})
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
}
