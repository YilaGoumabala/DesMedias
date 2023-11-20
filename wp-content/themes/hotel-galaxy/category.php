<?php get_header(); ?>
<div class="container">
	<main class="content-area">
		<div class="row">
			<div class="col-lg-8 wow fadeInLeft">
				<?php 
				if ( have_posts() ) {                    
					while ( have_posts() ) { the_post();
						get_template_part( 'template-parts/content/content','excerpt');
					}
                   ?>
					<div class="post-pagination">
						<?php // pagination						
						the_posts_pagination( array(
						'prev_text'          => '<i class="fa fa-angle-double-left"></i>',
						'next_text'          => '<i class="fa fa-angle-double-right"></i>',
						) );  ?>
					</div>
					<?php
				} else {                    
					get_template_part( 'template-parts/content/content','none' );
				}
				?> 
			</div>
			<div class="col-lg-4">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</main>
</div>
<?php get_footer(); ?>