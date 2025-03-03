import DocumentRepository from '../repositories/documentRepository.js';

class SearchService {
  static async performSearch(query) {
    try {
      const searchCriteria = SearchService.parseQuery(query);
      return DocumentRepository.findDocuments(searchCriteria);
    } catch (error) {
      throw new Error('Error processing search query.');
    }
  }

  static parseQuery(query) {
    const filters = {};
    const exactMatchRegex = /"([^"]+)"/g;
    const fieldSearchRegex = /(\w+):([^"\s]+)/g;
    const dateRangeRegex = /(\w+):(\d{4}-\d{2}-\d{2})\.\.(\d{4}-\d{2}-\d{2})/g;

    let match;
    while ((match = exactMatchRegex.exec(query)) !== null) {
      filters.$text = { $search: match[1] };
    }

    while ((match = fieldSearchRegex.exec(query)) !== null) {
      const field = match[1];
      const value = match[2];
      filters[field] = value;
    }

    while ((match = dateRangeRegex.exec(query)) !== null) {
      const field = match[1];
      const startDate = new Date(match[2]);
      const endDate = new Date(match[3]);

      filters[field] = { $gte: startDate, $lte: endDate };
    }

    return filters;
  }
}

export default SearchService;
