package com.asilvadev.sgvit.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * PecaController
 */

@Controller
public class PecaController {

    @RequestMapping("/add")
    public String form(){
        return "formPeca";
    }
}