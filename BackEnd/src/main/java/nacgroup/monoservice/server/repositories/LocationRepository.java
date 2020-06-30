package nacgroup.monoservice.server.repositories;

import nacgroup.monoservice.server.objects.Location;
import org.springframework.data.repository.CrudRepository;

public interface LocationRepository extends CrudRepository<Location, Long> {
}
