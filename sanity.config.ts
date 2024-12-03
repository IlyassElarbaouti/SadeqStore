import { schemaTypes } from '@/sanity/schemas';
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'


const config = defineConfig({
projectId:"8f4sc2ee",
dataset:"production",
title: "Sadeq store",
apiVersion:"2024-11-17",
basePath:"/admin",
plugins:[structureTool()],
schema:{types:schemaTypes}
});

export default config