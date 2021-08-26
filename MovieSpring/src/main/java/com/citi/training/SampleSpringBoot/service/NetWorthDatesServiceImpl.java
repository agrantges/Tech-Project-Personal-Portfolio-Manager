package com.citi.training.SampleSpringBoot.service;

import com.citi.training.SampleSpringBoot.entities.NetWorthDates;
import com.citi.training.SampleSpringBoot.repo.NetWorthDatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class NetWorthDatesServiceImpl implements NetWorthDatesService {

    @Autowired
    private NetWorthDatesRepository netWorthDatesRepository;

    @Override
    public Collection<NetWorthDates> getNetWorthDates()
    {
        return netWorthDatesRepository.getNetWorthDates();
    }

}