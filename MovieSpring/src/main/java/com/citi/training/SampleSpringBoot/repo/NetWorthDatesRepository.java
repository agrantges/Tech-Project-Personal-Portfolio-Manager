
package com.citi.training.SampleSpringBoot.repo;

import com.citi.training.SampleSpringBoot.entities.NetWorthDates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface NetWorthDatesRepository extends JpaRepository<NetWorthDates, Integer> {
    @Query(value="SELECT * FROM networth", nativeQuery = true)
    Collection<NetWorthDates> getNetWorthDates();
}