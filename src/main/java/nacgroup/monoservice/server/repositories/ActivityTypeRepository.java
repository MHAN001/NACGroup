package nacgroup.monoservice.server.repositories;

import nacgroup.monoservice.server.objects.ActivityType;
import org.springframework.data.repository.CrudRepository;

public interface ActivityTypeRepository extends CrudRepository<ActivityType, Long> {
}
