package nacgroup.monoservice.server;

import nacgroup.monoservice.server.objects.Activity;
import nacgroup.monoservice.server.objects.ActivityType;
import nacgroup.monoservice.server.objects.ContactType;
import nacgroup.monoservice.server.objects.Location;
import nacgroup.monoservice.server.repositories.ActivityRepository;
import nacgroup.monoservice.server.repositories.ActivityTypeRepository;
import nacgroup.monoservice.server.repositories.ContactTypeRepository;
import nacgroup.monoservice.server.repositories.LocationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.PageRequest;

import java.util.List;

@SpringBootApplication
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(
            ActivityRepository activityRepository,
            LocationRepository locationRepository,
            ContactTypeRepository contactTypeRepository,
            ActivityTypeRepository activityTypeRepository) {
        return (args) -> {
            Activity activity = new Activity();
            activity.setDescription("test description");
            activity.setActivityName("testName");
            activity.setLocation(locationRepository.save(new Location("test location")));
            activity.setContactType(contactTypeRepository.save(new ContactType("Wechat")));
            activity.setActivityType(activityTypeRepository.save(new ActivityType("Fishing")));
            activity.setActivityContact("test contact link");
            activityRepository.save(activity);
            List<Activity> activities = activityRepository.findActivitiesByActivityType(
                    "Fishing", PageRequest.of(0, 3));
            System.out.println("should be 1: " + activities.size() + "\n");
            activities = activityRepository.findActivitiesByActivityType(
                    "Not fishing", PageRequest.of(0, 3));
            System.out.println("should be 0: " + activities.size() + "\n");
            activities = activityRepository.findActivitiesByLocation("test location",
                    PageRequest.of(0, 3));
            System.out.println("should be 1: " + activities.size() + "\n");
            activities = activityRepository.findActivitiesByLocation("non exist location",
                    PageRequest.of(0, 3));
            System.out.println("should be 0: " + activities.size() + "\n");
            activities = activityRepository.findActivitiesByActivityTypeAndLocation(
                    "test location",
                    "Fishing",
                    PageRequest.of(0, 3));
            System.out.println("should be 1: " + activities.size() + "\n");
        };
    }

}
