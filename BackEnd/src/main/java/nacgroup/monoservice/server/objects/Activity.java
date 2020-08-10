package nacgroup.monoservice.server.objects;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "activity")
public class Activity {
    public Activity() {}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "activity_id")
    private Long id;

    private String description;

    @Column(name = "activity_name")
    private String activityName;

    @ManyToOne
    @JoinColumn(name = "location_id", foreignKey = @ForeignKey(name = "none"))
    private Location location;

    @ElementCollection
    @CollectionTable(name = "available_dates", joinColumns = @JoinColumn(name = "activity_id"),
            foreignKey = @ForeignKey(name = "none"))
    private List<Date> availableDates = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "contact_type_id", foreignKey = @ForeignKey(name = "none"))
    private ContactType contactType;

    private String activityContact;

    @ManyToOne
    @JoinColumn(name = "activity_type_id", foreignKey = @ForeignKey(name = "none"))
    private ActivityType activityType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getActivityName() {
        return activityName;
    }

    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public List<Date> getAvailableDates() {
        return availableDates;
    }

    public void setAvailableDates(List<Date> availableDates) {
        this.availableDates = availableDates;
    }

    public ContactType getContactType() {
        return contactType;
    }

    public void setContactType(ContactType contactType) {
        this.contactType = contactType;
    }

    public String getActivityContact() {
        return activityContact;
    }

    public void setActivityContact(String activityContact) {
        this.activityContact = activityContact;
    }

    public ActivityType getActivityType() {
        return activityType;
    }

    public void setActivityType(ActivityType activityType) {
        this.activityType = activityType;
    }
}
