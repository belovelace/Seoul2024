package com.seoul.app.start.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Controller
@RequestMapping
@RequiredArgsConstructor
public class StartController {

    @GetMapping("join")
    public String join(){return "start/start";}


}
