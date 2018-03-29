package org.elsys.qtask.repositories;

import org.elsys.qtask.models.Project;
import org.elsys.qtask.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
