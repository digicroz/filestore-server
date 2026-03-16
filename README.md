[![npm version](https://badge.fury.io/js/%40digicroz%2Ffilestore-server.svg)](https://badge.fury.io/js/%40digicroz%2Ffilestore-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# @digicroz/filestore-server

A server-side SDK for DC FileStore, enabling seamless file upload, download, and management operations.

## Features

- Server-to-server file operations
- TypeScript support
- TRPC integration
- ESM compatible

## Installation

```bash
npm install @digicroz/filestore-server
```

## Prerequisites

- Node.js >= 16.0.0
- Access token from DC FileStore (see below)

## Usage

Import and initialize the client:

```typescript
import { createFileStoreClient } from "@digicroz/filestore-server";

// Initialize the client with environment
const client = createFileStoreClient("production_remote");
```

### Available Methods

- `getPathInfo(path: string)`: Retrieves information about a specified path.
- `getFileInfo(fileId: string)`: Gets details about a specific file.
- `requestUploadUrl(params)`: Requests a pre-signed URL for file upload.
- `confirmUpload(params)`: Confirms the successful upload of a file.
- `deleteFile(fileId: string)`: Deletes a file from the store.

## Getting an Access Token

To obtain an access token:

1. Visit [https://filestore.digicroz.com/](https://filestore.digicroz.com/)
2. Create a Digicroz account if needed at [https://accounts.digicroz.com](https://accounts.digicroz.com)
3. Create a bucket and a base-level directory.
4. Navigate to the buckets page and click **Access Tokens**.
5. Generate a token using your directory ID and key name.

> **Important:** The token is displayed only once. Save it securely.

## Environments

- `development_local`: For local development
- `development_remote`: For remote development
- `production_remote`: For production use

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

[Adarsh Hatkar](https://github.com/AdarshHatkar)