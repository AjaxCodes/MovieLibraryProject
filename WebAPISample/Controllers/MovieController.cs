using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/movie")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }

        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            //get entire list of movies in DB
            IList<Movie> movies = _context.Movies.ToList();
            return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            // return Ok(movie);
            var selectedMovie = _context.Movies.Where(s => s.MovieId == id).SingleOrDefault();
            if (selectedMovie == null)
            {
                return NotFound();
            }
            return Ok(selectedMovie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            _context.Add(value);
            _context.SaveChanges();
            return Ok();
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            var movieToUpdate = _context.Movies.Where(s => s.MovieId == movie.MovieId).SingleOrDefault();
            if (movieToUpdate == null)
            {
                return NotFound();
            }
            movieToUpdate.Director = movie.Director;
            movieToUpdate.Genre = movie.Genre;
            movieToUpdate.Title = movie.Title;
            _context.Update(movieToUpdate);
            _context.SaveChanges();
            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            var movieToDelete = _context.Movies.Where(s => s.MovieId == id).SingleOrDefault();
            if (movieToDelete == null)
            {
                return NotFound();
            }
            _context.Remove(movieToDelete);
            _context.SaveChanges();
            return Ok();
        }
    }
}