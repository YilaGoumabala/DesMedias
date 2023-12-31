<article id="post-<?php the_ID(); ?>" <?php post_class('blog-item entry-content wow fadeInUp'); ?>>
	<figure class="entry-content">
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
		<p class="pt-5"><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'hotel-galaxy' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
	<?php elseif ( is_search() ) : ?>
		<p class="pt-5"><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'hotel-galaxy' ); ?></p>
	<?php else : ?>
		<p class="pt-5"><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'hotel-galaxy' ); ?></p>
	<?php endif; ?>	
</figure>
</article>