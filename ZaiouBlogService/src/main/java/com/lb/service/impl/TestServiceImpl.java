package com.lb.service.impl;

import com.lb.mapper.AdminMapper;
import com.lb.model.Admin;
import com.lb.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Description:
 * @Author: liubin
 * @Date: Created in 15:20 2018/2/27
 * @Modified by:
 */
@Service
public class TestServiceImpl implements TestService {
    @Autowired
    private AdminMapper adminMapper;

    @Override
    public Admin find() {
        return adminMapper.selectByPrimaryKey(1);
    }
}
