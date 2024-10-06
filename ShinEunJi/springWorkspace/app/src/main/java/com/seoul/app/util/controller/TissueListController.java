package com.seoul.app.util.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class TissueListController {

    @GetMapping("/tissueList")
    public String tissue(){return "util/tissue";}
}
