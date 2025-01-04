package com.scm.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;





@Controller
public class PageController {

    @RequestMapping("/home")
    public String home(Model model)
    {
        System.out.println("Home page handler");
        model.addAttribute("name", "Substring technology");
        model.addAttribute("Youtube_channel", "Omkar youtube channel");
        model.addAttribute("github_link", "https://github.com/Omkarthorat1042?tab=repositories");
        return "home";
    }


    @RequestMapping("/about")
    public String aboutPage(){
        System.out.println("About page loading");

        return "about";
    }
    
    
    @RequestMapping("/services")
    public String servicePage(){

        System.out.println("Services page is loading");

        return "services";
    }









}
