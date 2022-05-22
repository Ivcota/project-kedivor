import * as NexusCore from 'nexus/dist/core'

//
//
// TYPES
// TYPES
// TYPES
// TYPES
//
//

// Models

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Note`.
  *
  * ### ️⚠️ You have not writen documentation for model Note
  *
  * Replace this default advisory JSDoc with your own documentation about model Note
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Note {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Note } from 'nexus-prisma'
  *
  * objectType({
  *   name: Note.$name
  *   description: Note.$description
  *   definition(t) {
  *     t.field(Note.id)
  *   }
  * })
  */
export interface Note {
  $name: 'Note'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Note.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Note
    *
    * Replace this default advisory JSDoc with your own documentation about model Note
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Note {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Note } from 'nexus-prisma'
    *
    * objectType({
    *   name: Note.$name
    *   description: Note.$description
    *   definition(t) {
    *     t.field(Note.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Note', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Note.title`.
    *
    * ### ️⚠️ You have not writen documentation for model Note
    *
    * Replace this default advisory JSDoc with your own documentation about model Note
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Note {
    *   /// Lorem ipsum dolor sit amet.
    *   title  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Note } from 'nexus-prisma'
    *
    * objectType({
    *   name: Note.$name
    *   description: Note.$description
    *   definition(t) {
    *     t.field(Note.title)
    *   }
    * })
    */
  title: {
    /**
     * The name of this field.
     */
    name: 'title'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Note', 'title'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Note.note`.
    *
    * ### ️⚠️ You have not writen documentation for model Note
    *
    * Replace this default advisory JSDoc with your own documentation about model Note
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Note {
    *   /// Lorem ipsum dolor sit amet.
    *   note  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Note } from 'nexus-prisma'
    *
    * objectType({
    *   name: Note.$name
    *   description: Note.$description
    *   definition(t) {
    *     t.field(Note.note)
    *   }
    * })
    */
  note: {
    /**
     * The name of this field.
     */
    name: 'note'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Note', 'note'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Note.color`.
    *
    * ### ️⚠️ You have not writen documentation for model Note
    *
    * Replace this default advisory JSDoc with your own documentation about model Note
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Note {
    *   /// Lorem ipsum dolor sit amet.
    *   color  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Note } from 'nexus-prisma'
    *
    * objectType({
    *   name: Note.$name
    *   description: Note.$description
    *   definition(t) {
    *     t.field(Note.color)
    *   }
    * })
    */
  color: {
    /**
     * The name of this field.
     */
    name: 'color'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Note', 'color'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Note.lastUpdated`.
    *
    * ### ️⚠️ You have not writen documentation for model Note
    *
    * Replace this default advisory JSDoc with your own documentation about model Note
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Note {
    *   /// Lorem ipsum dolor sit amet.
    *   lastUpdated  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Note } from 'nexus-prisma'
    *
    * objectType({
    *   name: Note.$name
    *   description: Note.$description
    *   definition(t) {
    *     t.field(Note.lastUpdated)
    *   }
    * })
    */
  lastUpdated: {
    /**
     * The name of this field.
     */
    name: 'lastUpdated'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Note', 'lastUpdated'>
  }
}

// Enums

// N/A –– You have not defined any enums in your Prisma schema file.


//
//
// TERMS
// TERMS
// TERMS
// TERMS
//
//

//
//
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
//
//

export const Note: Note

//
//
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
//
//

// N/A –– You have not defined any enums in your Prisma schema file.

//
//
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
//
//

import { Runtime } from 'nexus-prisma/dist-cjs/generator/runtime/settingsSingleton'

/**
 * Adjust Nexus Prisma's [runtime settings](https://pris.ly/nexus-prisma/docs/settings/runtime).
 *
 * @example
 *
 *     import { PrismaClient } from '@prisma/client'
 *     import { ApolloServer } from 'apollo-server'
 *     import { makeSchema } from 'nexus'
 *     import { User, Post, $settings } from 'nexus-prisma'
 *
 *     new ApolloServer({
 *       schema: makeSchema({
 *         types: [],
 *       }),
 *       context() {
 *         return {
 *           db: new PrismaClient(), // <-- You put Prisma client on the "db" context property
 *         }
 *       },
 *     })
 *
 *     $settings({
 *       prismaClientContextField: 'db', // <-- Tell Nexus Prisma
 *     })
 *
 * @remarks This is _different_ than Nexus Prisma's [_gentime_ settings](https://pris.ly/nexus-prisma/docs/settings/gentime).
 */
export const $settings: typeof Runtime.changeSettings
