using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace WebAPISample.Models
{
    public class Movie
    {
        // We dont specify [Key] here becuase by using conventions it knows MovieId is the PK based off of its name.
        public int MovieId { get; set; }

        [Required(ErrorMessage = "Movie Title is required")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Movie Genre is required")]
        public string Genre { get; set; }

        [Required(ErrorMessage = "Director is required")]
        public string Director { get; set; }
    }
}
