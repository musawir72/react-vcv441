import React from 'react';
const MovieForm = () => {
  return (
    <form class="form-inline" action="/action_page.php">
      <div class="form-group">
        <label for="email">Name:</label>
        <input type="text" class="form-control" id="email" />
      </div>
      <div class="form-group">
        <label for="ratings">Ratings:</label>
        <input type="text" class="form-control" id="ratings" />
      </div>
      <div class="form-group">
        <label for="durations">Durations:</label>
        <input type="text" class="form-control" id="durations" />
      </div>
      <button type="submit" class="btn btn-default">
        Submit
      </button>
    </form>
  );
};
export default MovieForm;
