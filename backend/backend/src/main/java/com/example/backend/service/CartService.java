package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Cart;
import com.example.backend.repository.CartRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    public Cart getCartById(Long id) {
        return cartRepository.findById(id).orElse(null);
    }

    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart updateCart(Long id, Cart cartDetails) {
        Cart cart = cartRepository.findById(id).orElse(null);
        if (cart != null) {
            cart.setUser(cartDetails.getUser());
            cart.setCartItems(cartDetails.getCartItems());
            cart.setCreatedAt(cartDetails.getCreatedAt());
            cart.setUpdatedAt(cartDetails.getUpdatedAt());
            return cartRepository.save(cart);
        }
        return null;
    }

    public void deleteCart(Long id) {
        cartRepository.deleteById(id);
    }
}
