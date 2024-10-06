package com.seoul.app.util.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class ParkListController {

    @GetMapping("/parkList")
    public String park(){return "util/parkList";}

}
