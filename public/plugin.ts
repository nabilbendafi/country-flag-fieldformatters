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

import {
  CoreSetup,
  CoreStart,
  Plugin,
  PluginInitializerContext,
} from '../../../src/core/public';
import {
  DataPublicPluginStart,
  DataPublicPluginSetup
} from '../../../src/plugins/data/public';

import { CountryFlagFieldFormat } from './country-flag';

import { CountryFlagFieldFormatsPluginSetup, CountryFlagFieldFormatsPluginStart } from './types';

interface CountryFlagFieldFormatsPluginSetupDeps {
  data: DataPublicPluginSetup;
}

interface CountryFlagFieldFormatsPluginStartDeps {
  data: DataPublicPluginStart;
}

export class CountryFlagFieldFormatsPlugin
  implements Plugin<CountryFlagFieldFormatsPluginSetupDeps, CountryFlagFieldFormatsPluginStartDeps> {

  initializerContext: PluginInitializerContext;

  constructor(initializerContext: PluginInitializerContext) {
    this.initializerContext = initializerContext;
  }

  public setup(
    core: CoreSetup,
    { data }: CountryFlagFieldFormatsPluginSetupDeps
  ): CountryFlagFieldFormatsPluginSetup {
    data.fieldFormats.register([CountryFlagFieldFormat]);

    return {};
  }

  public start(
    core: CoreStart,
    { data }: CountryFlagFieldFormatsPluginStartDeps
  ): CountryFlagFieldFormatsPluginStart {
    data.fieldFormats.getType('countryFlag');

    return {};
  }

  public stop() {}
}
