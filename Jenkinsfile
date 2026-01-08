pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                // Only put the GitHub URL here
                git 'https://github.com/shifa-cloud/LBC.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t static-web:latest .'
            }
        }

        stage('Deploy to Minikube') {
            steps {
                sh '''
                kubectl apply -f deployment.yaml
                kubectl apply -f service.yaml
                '''
            }
        }
    }
}
