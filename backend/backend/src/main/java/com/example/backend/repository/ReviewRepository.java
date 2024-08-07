package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
