using Microsoft.EntityFrameworkCore;
using WebAPISample.Models;

namespace WebAPISample.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Movie>()
              .HasData(
                 new Movie { MovieId = 1, Title = "The Departed", Genre = "Drama", Director = "Martin Scorsese", ImgPath = ""},
                 new Movie { MovieId = 2, Title = "The Dark Knight", Genre = "Drama", Director = "Christopher Nolan", ImgPath = "" },
                 new Movie { MovieId = 3, Title = "Inception", Genre = "Drama", Director = "Christopher Nolan", ImgPath = "" },
                 new Movie { MovieId = 4, Title = "Pineapple Express", Genre = "Comedy", Director = "David Gordon Green", ImgPath = "" },
                 new Movie { MovieId = 5, Title = "Die Hard", Genre = "Action", Director = "John McTiernan", ImgPath = "" });
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
