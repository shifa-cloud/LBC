pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t static-web:latest .'
            }
        }

        stage('Deploy to Minikube') {
            steps {
                sh '''
                kubectl apply -f deployment.yaml --validate=false

                kubectl apply -f service.yaml
                '''
            }
        }
    }
}
