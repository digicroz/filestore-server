# @digicroz/filestore-server

Server-side SDK for DC FileStore — provides methods for file upload, download, and management.

## Installation

```bash
npm install @digicroz/filestore-server
```

## Usage

```typescript
import { createFileStoreClient } from "@digicroz/filestore-server";

// Initialize the client
const client = createFileStoreClient("production_remote");

// Available methods:
// client.getPathInfo(...)
// client.getFileInfo(...)
// client.requestUploadUrl(...)
// client.confirmUpload(...)
// client.deleteFile(...)
```

## How to Get an Access Token

To get an access token for the FileStore, follow these steps:

1. Visit [https://filestore.digicroz.com/](https://filestore.digicroz.com/)
2. If you don't have a Digicroz Account, first create one at [https://accounts.digicroz.com](https://accounts.digicroz.com)
3. Create a bucket
4. Create a base level directory in that bucket
5. Go to the buckets page and click on the **Access Tokens** button
6. Use your directory ID and key name, then generate the access token

> **Note:** The token is shown only once! Be sure to note it down immediately after generation.