/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import _ from 'lodash';

import { FieldFormat, KBN_FIELD_TYPES } from '../../../src/plugins/data/public';

// Include CSS file from [flag-icon-css](https://www.npmjs.com/package/flag-icon-css)
import 'flag-icon-css/css/flag-icon.css';

// Create a new FieldFormat type and inherit FieldFormat
export class CountryFlagFieldFormat extends FieldFormat {
  // The id of this field format
  static id = 'countryFlag';
  // The title of the field format, shown to the user
  static title = 'Country Flag';
  // An array of types, which this field formatter can be used for.
  // You can only apply this field formatter to fields, that have one
  // of the here specified types. Possible types are:
  // number, boolean, date, ip, attachment, geo_point, geo_shape, string, murmur3
  // murmur3 (Murmur3 plugin hashes), unknown (unknown field type),
  // conflict (fields that have different types in different indices matched by the index pattern)
  static fieldType = [
    KBN_FIELD_TYPES.STRING,
    KBN_FIELD_TYPES.UNKNOWN
  ];

  textConvert = (value: string) => {
    return value;
  };

  htmlConvert = (value: string) => {
    var html = '<span class="flag-icon flag-icon-' + value.toLowerCase() + '" tooltip="' + value + '"></span>';
    return html;
  }
};
