import SearchService from '../services/searchService.js';

class SearchController {
  static async advancedSearch(req, res) {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({ error: 'Search query is required.' });
      }

      const results = await SearchService.performSearch(query);
      res.json({ results });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default SearchController;
