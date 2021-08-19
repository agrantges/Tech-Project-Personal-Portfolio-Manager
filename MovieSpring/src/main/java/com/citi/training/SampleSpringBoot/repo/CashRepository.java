
package com.citi.training.SampleSpringBoot.repo;

import com.citi.training.SampleSpringBoot.entities.Cash;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface CashRepository extends JpaRepository<Cash, Integer> {
    //Collection<Cash> findByAcct_number(String accNum);
    @Query(value="SELECT SUM(value) FROM Cash c", nativeQuery=true)
    public Double getNetWorth();
}