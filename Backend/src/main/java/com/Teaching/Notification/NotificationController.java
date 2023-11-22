package com.Teaching.Notification;
import com.Teaching.Student.Student;
import com.Teaching.Student.StudentRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class NotificationController {
    @Autowired
    private NotificationRepository repository;

    @Autowired
    private StudentRepositery studentRepositery;

    @GetMapping("/getNotification")
    public List<Notification> getNotification() {
        List<Notification> allInfo = repository.findAll();
        for (Notification notification:allInfo) {
            String msgDate = notification.getDate();
            String currentDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));
            String timeDifference = CalculateTime.findDifference(msgDate, currentDate);
            notification.setDate(timeDifference);
        }
        return allInfo;
    }

    @GetMapping("/getStudent/{id}")
    public Student getStudent(@PathVariable String id){
        return  this.studentRepositery.findById(id).get();
    }
}
