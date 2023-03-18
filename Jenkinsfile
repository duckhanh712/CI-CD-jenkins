#!/usr/bin/env groovy

node {
    properties([disableConcurrentBuilds()])
    try {

        def remote = [:]
        remote.name = 'upcloud'
        remote.host = '95.111.192.214'
        remote.user = 'root'
        remote.allowAnyHosts = true

        project = "test-jenkins"
        dockerRepo = "duckhanh97"
        dockerFile = "Dockerfile"
        imageName = "${dockerRepo}/${project}"
        buildNumber = "${env.BUILD_NUMBER}"
        branch_name = "main"
        dockerComposeDevFile = "docker-compose.yml"

        stage('checkout code') {
            checkout scm
            sh "git checkout ${branch_name} && git reset --hard origin/${branch_name}"
        }

        stage('build') {
            sh "docker build --platform linux/amd64 -t ${imageName}:${branch_name}-build-${buildNumber} -f ./Dockerfile ."
        }

        stage('push') {
            withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                sh "docker push ${imageName}:${branch_name}-build-${buildNumber}"
            } 
        }

        stage('build-SSH') {
           sh """ 
            export IMAGE_BUILD=${imageName}:${branch_name}-build-${buildNumber}
            ssh -o StrictHostKeyChecking=no ${remote.user}@${remote.host} 'export IMAGE_BUILD=${imageName}:${branch_name}-build-${buildNumber} && cd workspace/${project}/ && docker-compose -f ${dockerComposeDevFile} down && docker-compose -f ${dockerComposeDevFile} up -d'            
            
            """
        }

    } catch (e) {
        currentBuild.result = "FAILED"
        throw e
    }
}
