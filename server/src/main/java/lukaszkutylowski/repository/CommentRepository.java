package lukaszkutylowski.repository;

import lukaszkutylowski.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
public interface CommentRepository extends JpaRepository<Comment, Long>{
    List<Comment> findAllByModel(String model);
}
