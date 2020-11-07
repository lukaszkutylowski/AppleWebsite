package lukaszkutylowski.controller;

import java.net.URI;
import java.util.List;

import lukaszkutylowski.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lukaszkutylowski.repository.CommentRepository;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin
public class CommentController {

	private CommentRepository commentRepository;

	private final String MODEL_1 = "iPhone 11";
	private final String MODEL_2 = "iPhone 12";

	@Autowired
	public CommentController(CommentRepository commentRepository) {
		this.commentRepository = commentRepository;
	}
	
	@GetMapping(path = "/11", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Comment>> getIphone11Comments() {
		List<Comment> allComments = commentRepository.findAllByModel(MODEL_1);
		return ResponseEntity.ok(allComments);
	}

    @GetMapping(path = "/12", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Comment>> getIphone12comments() {
        List<Comment> allComments = commentRepository.findAllByModel(MODEL_2);
        return ResponseEntity.ok(allComments);
    }

	@PostMapping(path = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> saveComment(@RequestBody Comment comment) {
		Comment save = commentRepository.save(comment);
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{commentid}")
				.buildAndExpand(save.getCommentid())
				.toUri();
		return ResponseEntity.created(location).body(save);
	}
}
