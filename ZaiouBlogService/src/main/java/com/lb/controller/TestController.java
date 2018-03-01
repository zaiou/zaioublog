package com.lb.controller;

import com.lb.model.Admin;
import com.lb.service.TestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Description:
 * @Author: liubin
 * @Date: Created in 15:02 2018/2/27
 * @Modified by:
 */
@Controller
public class TestController {
    private final static Logger logger = LoggerFactory.getLogger(TestController.class);
    @Autowired
    private  TestService testService;

    @RequestMapping(value = "/test/{id}",method = RequestMethod.GET)
    @ResponseBody
    public Admin find(@PathVariable Integer id){
        logger.info("测试restful风格接受参数"+id);
        logger.info("添加日志测试");
        return  testService.find(id);
    }
}
