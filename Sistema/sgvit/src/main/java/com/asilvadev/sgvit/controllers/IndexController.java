package com.asilvadev.sgvit.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;

/**
 * IndexController
 */
@Controller
public class IndexController {

    @GetMapping("/home")
    public String index(){
        return "index";
    }
}