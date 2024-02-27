/******************************************************************************
 *  Copyright 2019 ModusBox, Inc.                                             *
 *                                                                            *
 *  info@modusbox.com                                                         *
 *                                                                            *
 *  Licensed under the Apache License, Version 2.0 (the "License");           *
 *  you may not use this file except in compliance with the License.          *
 *  You may obtain a copy of the License at                                   *
 *  http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                            *
 *  Unless required by applicable law or agreed to in writing, software       *
 *  distributed under the License is distributed on an "AS IS" BASIS,         *
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 *  See the License for the specific language governing permissions and       *
 *  limitations under the License.                                            *
 ******************************************************************************/

const utils = require('../utils/writer.js');
const JWSCertsService = require('../service/JWSCertsService');

exports.createDfspJWSCerts = (req, res, next, body, dfspId) => {
  JWSCertsService.createDfspJWSCerts(req.context, dfspId, body)
    .then(response => {
      utils.writeJson(res, response);
    })
    .catch(response => {
      utils.writeJson(res, response, response.status);
    });
};

exports.setHubJWSCerts = (req, res, next, body) => {
  JWSCertsService.setHubJWSCerts(req.context, body)
    .then(response => {
      utils.writeJson(res, response);
    })
    .catch(response => {
      utils.writeJson(res, response, response.status);
    });
};

// exports.updateDfspJWSCerts = (req, res, next, body, dfspId) => {
//   JWSCertsService.updateDfspJWSCerts(req.context, dfspId, body)
//     .then(response => {
//       utils.writeJson(res, response);
//     })
//     .catch(response => {
//       utils.writeJson(res, response, response.status);
//     });
// };

exports.getDfspJWSCerts = (req, res, next, dfspId) => {
  JWSCertsService.getDfspJWSCerts(req.context, dfspId)
    .then(response => {
      utils.writeJson(res, response);
    })
    .catch(response => {
      utils.writeJson(res, response, response.status);
    });
};

exports.getHubJWSCerts = (req, res, next) => {
  JWSCertsService.getHubJWSCerts(req.context)
    .then(response => {
      utils.writeJson(res, response);
    })
    .catch(response => {
      utils.writeJson(res, response, response.status);
    });
};

exports.getAllDfspJWSCerts = (req, res, next) => {
  JWSCertsService.getAllDfspJWSCerts(req.context)
    .then(response => {
      utils.writeJson(res, response);
    })
    .catch(response => {
      utils.writeJson(res, response, response.status);
    });
};

exports.deleteDfspJWSCerts = (req, res, next, dfspId) => {
  JWSCertsService.deleteDfspJWSCerts(req.context, dfspId)
    .then(response => {
      utils.writeJson(res, response);
    })
    .catch(response => {
      utils.writeJson(res, response, response.status);
    });
};
