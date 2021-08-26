
package com.citi.training.SampleSpringBoot.repo;

import com.citi.training.SampleSpringBoot.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    @Query(value="SELECT SUM(value) FROM accounts", nativeQuery=true)
    List<Double> getNetWorth();

    @Query(value="SELECT value FROM accounts", nativeQuery = true)
    List<Double> findAllValues();

    @Query(value="SELECT * FROM cash_accounts", nativeQuery = true)
    Collection<Account> getAllCash();

    @Query(value="SELECT * FROM investment_accounts", nativeQuery = true)
    Collection<Account> getAllInvestment();
}