package lukaszkutylowski.model;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@CrossOrigin
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long commentid;
	private String username;
	private String description;
	private String model;
	
	public Comment() {}

	public Comment(String username, String description, String model) {
		this.username = username;
		this.description = description;
		this.model = model;
	}

	public Long getCommentid() {
		return commentid;
	}

	public void setCommentid(Long commentid) {
		this.commentid = commentid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
