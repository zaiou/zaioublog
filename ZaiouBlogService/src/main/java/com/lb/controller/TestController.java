package com.lb.controller;

import com.lb.model.Admin;
import com.lb.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Description:
 * @Author: liubin
 * @Date: Created in 15:02 2018/2/27
 * @Modified by:
 */
@Controller
@RequestMapping(value = "/test")
public class TestController {
    @Autowired
    private  TestService testService;

    @RequestMapping(value = "/find")
    @ResponseBody
    public Admin find(){
        return  testService.find();
    }
}
