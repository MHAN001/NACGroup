package nacgroup.monoservice.server.service;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/hello")
public class HelloWorldController {

    @GetMapping(path = "/world")
    public @ResponseBody String get() {
        return "Go NACG";
    }

}
