import submissions from '../../data.js';

class DocumentRepository {
  static findDocuments(filters) {
    return submissions.filter((submission) => {
      for (const key in filters) {
        if (key === '$text') {
          const searchValue = filters[key].$search.toLowerCase();
          const fullName =
            `${submission.firstName} ${submission.lastName}`.toLowerCase();
          const email = submission.supervisorEmail.toLowerCase();

          if (!fullName.includes(searchValue) && !email.includes(searchValue)) {
            return false;
          }
        } else if (key === 'startDate') {
          const startDate = new Date(submission.startDate);
          if (startDate < filters[key].$gte || startDate > filters[key].$lte) {
            return false;
          }
        } else {
          if (
            !submission[key] ||
            submission[key].toString().toLowerCase() !==
              filters[key].toString().toLowerCase()
          ) {
            return false;
          }
        }
      }
      return true;
    });
  }
}

export default DocumentRepository;
