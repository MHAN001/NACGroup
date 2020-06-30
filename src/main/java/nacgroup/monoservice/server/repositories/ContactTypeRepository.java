package nacgroup.monoservice.server.repositories;

import nacgroup.monoservice.server.objects.ContactType;
import org.springframework.data.repository.CrudRepository;

public interface ContactTypeRepository extends CrudRepository<ContactType, Long> {
}
