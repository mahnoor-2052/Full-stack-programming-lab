$(document).ready(function () {

  let page = 1;
  const perPage = 6;
  let allPosts = [];

  function renderPosts(posts) {
    posts.forEach(function (post, i) {
      const $card = $("<div class='post-card'></div>");
      $card.css("animation-delay", (i * 60) + "ms");
      $card.append($("<div class='post-id'>POST #" + post.id + "</div>"));
      $card.append($("<div class='post-title'></div>").text(post.title));
      $card.append($("<div class='post-body'></div>").text(post.body));
      $("#postList").append($card);
    });
  }

  $("#fetchBtn").on("click", function () {
    if (allPosts.length > 0) return; // already fetched

    $("#status").text("Fetching…");
    $(this).prop("disabled", true).text("Loading…");

    $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
      allPosts = data;
      renderPosts(allPosts.slice(0, perPage));
      page = 1;
      $("#status").text("Showing " + perPage + " of " + allPosts.length + " posts");
      $("#loadMoreWrap").fadeIn(300);
      $("#fetchBtn").text("Posts Loaded ✓");
    }).fail(function () {
      $("#status").text("Failed to fetch posts. Check your connection.");
      $("#fetchBtn").prop("disabled", false).text("Retry");
    });
  });

  $("#loadMoreBtn").on("click", function () {
    page++;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const next = allPosts.slice(start, end);

    if (next.length === 0) {
      $(this).prop("disabled", true).text("No More Posts");
      return;
    }

    renderPosts(next);
    const shown = Math.min(page * perPage, allPosts.length);
    $("#status").text("Showing " + shown + " of " + allPosts.length + " posts");

    if (shown >= allPosts.length) {
      $(this).prop("disabled", true).text("All Posts Loaded");
    }
  });

});
