package com.citi.training.SampleSpringBoot.rest;

import com.citi.training.SampleSpringBoot.entities.NetWorthDates;
import com.citi.training.SampleSpringBoot.service.NetWorthDatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping({"/networthdates"})
public class NetWorthDatesController
{

    @Autowired
    private NetWorthDatesService netWorthDatesService;

    @CrossOrigin
    @GetMapping(path="/networthdates")
    public @ResponseBody Collection<NetWorthDates> getNetWorthDates()
    {
        return netWorthDatesService.getNetWorthDates();
    }
}