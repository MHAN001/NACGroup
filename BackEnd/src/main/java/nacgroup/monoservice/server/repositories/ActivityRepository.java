package nacgroup.monoservice.server.repositories;

import nacgroup.monoservice.server.objects.Activity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

// TODO(Xinyuan): check if the following queries are efficient
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    @Query("select a from Activity a where a.location.name = :locationName")
    List<Activity> findActivitiesByLocation(@Param("locationName") String locationName, Pageable pageable);

    @Query("select a from Activity a where a.activityType.activityTypeName = :activityType")
    List<Activity> findActivitiesByActivityType(@Param("activityType") String activityType, Pageable pageable);

    @Query("select a from Activity a where a.location.name = :locationName and a.activityType.activityTypeName = :activityType")
    List<Activity> findActivitiesByActivityTypeAndLocation(
            @Param("locationName") String locationName,
            @Param("activityType") String activityType,
            Pageable pageable
    );
}
