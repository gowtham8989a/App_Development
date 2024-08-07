package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.CartItem;
import com.example.backend.repository.CartItemRepository;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    public CartItem getCartItemById(Long id) {
        return cartItemRepository.findById(id).orElse(null);
    }

    public CartItem createCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public CartItem updateCartItem(Long id, CartItem cartItemDetails) {
        CartItem cartItem = cartItemRepository.findById(id).orElse(null);
        if (cartItem != null) {
            cartItem.setCart(cartItemDetails.getCart());
            cartItem.setProduct(cartItemDetails.getProduct());
            cartItem.setQuantity(cartItemDetails.getQuantity());
            cartItem.setCreatedAt(cartItemDetails.getCreatedAt());
            cartItem.setUpdatedAt(cartItemDetails.getUpdatedAt());
            return cartItemRepository.save(cartItem);
        }
        return null;
    }

    public void deleteCartItem(Long id) {
        cartItemRepository.deleteById(id);
    }
}
