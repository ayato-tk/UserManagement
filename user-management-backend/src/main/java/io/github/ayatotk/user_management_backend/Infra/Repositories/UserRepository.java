package io.github.ayatotk.user_management_backend.Infra.Repositories;

import io.github.ayatotk.user_management_backend.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> { }